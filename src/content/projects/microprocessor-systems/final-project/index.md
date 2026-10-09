---
title: Interactive 2D Physics Engine
label: Final project
context: E155 final project · Fall 2024 · with Stephen Xu
summary: A tilt-controlled sand simulator. An FPGA runs the particle physics and drives a 64×64 LED matrix in 12-bit color while an STM32 reads an accelerometer and streams the gravity direction over SPI.
tags: [FPGA, SystemVerilog, STM32, I2C, SPI, LED matrix]
coverUrl: https://interactive-physics-engine.netlify.app/images/completed.png
coverAlt: The finished physics engine in its 3D-printed housing
order: 7
links:
  - label: Project site
    url: https://interactive-physics-engine.netlify.app/
  - label: Source code
    url: https://github.com/stuxf/interactive-physics-engine
---
## What it does

Each lit pixel on a 64×64 LED matrix is a grain of sand. Tilt the box and gravity follows: the grains fall, pile up, collide with each other and with the walls, and settle in whatever direction is now "down."

<iframe src="https://www.youtube.com/embed/clDaFqf6akY" title="Interactive physics engine demo" allowfullscreen></iframe>

## System design

We split the work so each chip does what it is good at.

- **STM32L432KC microcontroller:** reads an MPU6050 accelerometer over 400 kHz I2C (±2 g range, 1 kHz sampling), turns the X and Y acceleration into a tilt angle with `atan2`, maps it to 0–360°, and sends it to the FPGA over a one-way SPI link.
- **FPGA:** acts as a physics accelerator. It treats each pixel as a cellular automaton, updates every particle based on the current gravity direction, and drives the LED matrix.

![System block diagram](https://interactive-physics-engine.netlify.app/images/block_diagram.png)

## Display driver

The matrix natively shows only 3-bit color (8 colors). We built a display driver that uses binary-coded modulation (BCM) to reach 12-bit color, which is 4,096 colors, while keeping the refresh rate above 300 Hz with no ghosting. BCM also gives a logarithmic, eye-friendly dimming curve. The driver is a three-state machine: shift a row of pixel data in, latch it, then enable the output.

![Display driver state machine](https://interactive-physics-engine.netlify.app/images/state_machine.png)

## The hard part: memory

We originally planned to store the simulation in block RAM with double buffering. Timing problems with block RAM forced us to keep the particle state in LUTs instead, which limited how many particles we could simulate. We reworked the design around rotating frame buffers that hold the current and previous frame. It's a real lesson in checking a resource budget early.

## Testing

We checked both serial links with a logic analyzer and verified the physics engine in simulation before putting it on hardware.

![I2C trace between the MCU and the IMU](https://interactive-physics-engine.netlify.app/images/I2C.jpg)

![SPI trace from the MCU to the FPGA](https://interactive-physics-engine.netlify.app/images/SPI.jpg)

![Physics engine testbench passing](https://interactive-physics-engine.netlify.app/images/testbench_success.png)

## Results

We met every spec we set: sub-second response to tilt, 12-bit color, a refresh rate above 300 Hz, movement in eight directions, at least ten particles with particle and wall collisions, and a stable simulation with no drift over time. We hand-soldered the electronics on perfboard and designed a 3D-printed housing.

![Perfboard soldering](https://interactive-physics-engine.netlify.app/images/perfboard.png)

## What I'd do next

Get block RAM working so the engine can handle far more particles, and use more of the IMU's data so the sand reacts to shaking as well as tilt.
