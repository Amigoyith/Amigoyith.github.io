---
title: Keypad Scanner
label: Lab 3
context: E155 Lab 3 · Fall 2024
summary: FPGA logic that scans a 4×4 matrix keypad, debounces it with a state machine, and shows the last two keys pressed on the multiplexed display from Lab 2.
tags: [FPGA, SystemVerilog, FSM, Debouncing, Testbenches]
cover: ./images/lab3blockdiagram.jpg
coverAlt: Block diagram of the keypad scanner system
order: 3
links:
  - label: Source code
    url: https://github.com/Amigoyith/e155-lab3
---
The keypad had to register each press exactly once: no repeats while a key is held, and no false presses from switch bounce. The last two keys appear on the dual display, newest on the right.

## Hardware

The columns sit high on pull-up resistors. The scanner drives one row low at a time (`0111`, `1011`, …), so a pressed key pulls its column low.

![Keypad wiring schematic](./images/3sche.jpg)

## Modules

- **Scanner FSM** watches the columns, decides whether a press happened, and drives the rows.
- **Decoder** turns the active row and column into a hex digit.
- **Storage** keeps the two most recent digits in a pair of registers. Keeping it out of the scanner made both modules simpler to debug.
- **Display** is the multiplexed driver from Lab 2.

Column inputs pass through a two-flop synchronizer before reaching the FSM.

## Debouncing

A counter has to reach `DEBOUNCE_TIME` before the FSM moves to the pressed state; if the key is released first, it goes back to scanning. I chose this over an RC filter because the timing can be retuned for a different switch in code, at the cost of a small delay before the digit appears.

![Scanner state machine](./images/fsmscanner.jpg)

![Scanner state transition table](./images/fsmscannertable.jpg)

## Registering one press per key

The display updates on the rising edge of `key_pressed`, so holding a key down never adds another digit.

![Row scanning states](./images/fsmscanrows.jpg)

![Two-digit storage module](./images/lab3storage.jpg)

## Verification

The top-level testbench checks that a press that is too short is ignored, and that when two keys are pressed close together only the first one registers.

![Top-level testbench waveforms](./images/testbenchtop.jpg)

![Module tests without the synchronizer, showing the same behavior two cycles earlier](./images/testbenchwithoutsyncindividual.jpg)

## What I'd do differently

Bring an oscilloscope in earlier to confirm each state fires at the right time on real hardware, instead of trusting the testbench alone.
