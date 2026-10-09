---
title: Datapath & Full Processor
label: Lab 11
context: E85 Lab 11
summary: The datapath for the multicycle RISC-V processor, connected to the Lab 10 controller and a shared instruction/data memory, then verified by tracing a test program cycle by cycle.
tags: [SystemVerilog, RISC-V, Datapath, Debugging, QuestaSim]
cover: ./images/memwrite-waveform.png
coverAlt: Simulation waveform of the final store, MemWrite high writing 0x47 to address 0x54
order: 2
---
With the controller done, this lab adds the datapath and wraps both in a top-level module with one memory shared by instructions and data, the way a multicycle design expects.

## System design

The controller takes `op`, `funct3`, `funct7` bit 5 and `Zero` from the datapath and sends back every select and enable. The datapath holds the program counter, instruction and data registers, the register file, the ALU and the multiplexers between them.

![Top-level block diagram of the controller, datapath and memory](./images/system-diagram.png)

![The processor module connecting the controller and datapath](./images/processor-code.png)

![Datapath: registers, multiplexers, register file and ALU](./images/datapath-code.png)

Because the memory is shared, I moved the `$readmemh` that loads the program from the instruction memory into the combined memory module.

## Writing down what should happen

Before simulating, I traced the test program by hand: for every cycle, the PC, the instruction, the state the controller should be in, and the result it should produce. Having that table made it quick to spot the first cycle where the waveform disagreed with my expectations, which is where every bug hunt starts.

![Expected operation for the first instructions after reset, completed by hand](./images/expected-operation.png)

## Results

The full simulation runs the program to the end. The final check is the store: when `MemWrite` goes high, the processor writes `0x47` (71) to address `0x54`, exactly what the program expects.

![Full simulation in Questa, ending with "Simulation succeeded"](./images/full-simulation.png)
