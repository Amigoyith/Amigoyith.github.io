---
title: Multicycle RISC-V Processor
context: Digital Electronics & Computer Engineering (E85)
summary: A multicycle RISC-V processor designed in SystemVerilog over two labs, first the controller and then the datapath, and debugged in simulation until it ran a test program correctly.
tags: [SystemVerilog, RISC-V, CPU design, FSM, QuestaSim]
cover: ./lab-11/images/system-diagram.png
coverAlt: Top-level block diagram of the processor, its controller, datapath and memory
order: 3
---
The last two labs of E85 tie the course together: digital design, hardware description languages, assembly and microarchitecture. A multicycle processor breaks each instruction into steps (fetch, decode, execute, memory, write-back) and reuses one ALU and one memory across those steps, with a state machine sequencing the datapath.

I built the controller first and tested it against provided vectors, then wrote the datapath, connected the two, and traced a machine-language program through the simulation cycle by cycle. Pick a lab below for the details.
