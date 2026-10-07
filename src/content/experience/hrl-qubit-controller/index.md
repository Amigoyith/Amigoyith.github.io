---
title: Electrical & Embedded Systems Engineer (Clinic)
short: HRL
org: HRL Laboratories
dates: September 2026 – present
location: Harvey Mudd Engineering Clinic
kind: Clinic
order: 2
summary: Replacing a custom timed processor in a Xilinx RFSoC qubit controller with a standard RISC-V core so quantum experiments can use standard compilers and toolchains.
tags: [SystemVerilog, UVM, SymbiYosys, Verilator, RISC-V, Xilinx RFSoC]
highlights:
  - Authored a UVM-based verification plan for the controller's command stream and am designing SymbiYosys formal verification.
  - Built SystemVerilog event testbenches at 7 pipeline checkpoints across 3 clock domains in a Verilator simulation of the full design.
  - Identified capacity, backpressure and reset risks that now shape the design of the processor adapter.
---

<!--
  PHOTOS: check with the HRL liaison before posting anything. Block diagrams
  you drew yourself at a high level, or a team photo, are usually safest.
  ![Caption shown under the photo](./my-photo.jpg)
-->

## The project

HRL's qubit controller runs on a Xilinx RFSoC and uses a custom timed processor to sequence control pulses. Because that processor has its own instruction set, experiments can't use standard compilers. Our clinic team is replacing it with a RISC-V core, which means building an adapter between the RISC-V core and the existing command pipeline without breaking its timing guarantees.

## My part: verification first

Before changing the design, we need to know exactly how the current command stream behaves. I wrote the team's UVM-based verification plan for the controller command stream and am setting up SymbiYosys formal verification for the parts where simulation alone won't give enough confidence.

To see inside the design, I built SystemVerilog event testbenches that watch 7 checkpoints along the pipeline, spread across 3 clock domains, in a Verilator simulation of the full design. Those traces surfaced capacity, backpressure and reset risks that the adapter has to handle, and they now feed directly into its design.

*This project is ongoing; I'll add results as the year goes on.*
