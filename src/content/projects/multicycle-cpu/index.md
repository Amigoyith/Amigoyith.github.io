---
title: Multicycle Processor
context: Digital Electronics & Computer Engineering (E85)
summary: A multicycle processor built from scratch in SystemVerilog, with its own datapath and control state machine.
tags: [SystemVerilog, CPU design, FSM]
order: 3
links:
  - label: Repository
    url: https://github.com/Amigoyith/E85-lab10
---

<!--
  TODO (Amy): this page needs your input. The repo currently only has a README.
  Good things to add here:
  - A datapath diagram and the control FSM diagram
  - Which instructions it supports
  - A testbench waveform showing a program running
  - Push the SystemVerilog to the E85-lab10 repo so the link shows real code
  ![Caption shown under the photo](./images/datapath.jpg)
-->

## Overview

For the final lab of E85, I built a multicycle processor in SystemVerilog. A multicycle design breaks each instruction into steps (fetch, decode, execute, memory, write-back) and reuses one ALU and one memory across those steps, with a finite state machine sequencing the datapath.

*More details and diagrams are coming soon.*
