---
title: Electrical Engineer Co-Op
short: RTX
org: RTX Collins Aerospace
dates: June 2025 – August 2026
location: Avionics SBU, display products
kind: Industry
order: 1
summary: Hardware design, bring-up, verification and qualification for avionics display control panels. Helped take six panels through final production release to the customer.
tags: [Altium, DO-160G, MIL-STD, EMI, DOORS, JTAG / boundary scan]
highlights:
  - Designed a level-shifted JTAG adapter in Altium for Ethernet-card programming and boundary-scan debug. It released first pass with no re-spin, and I led its bring-up, documentation and qualification.
  - Ran DO-160G and MIL-STD environmental qualification with the test technicians. Diagnosed a radiated-emissions failure and fixed it with series damping on a high-speed clock, recovering three weeks of schedule.
  - Authored 450+ hardware requirements and 300+ verification test cases in DOORS, keeping system-to-hardware traceability through five formal PREP reviews.
  - Modified a circuit card layout and rerouted 10+ signal lines so two display units could undergo flash-memory proton-radiation testing.
  - Wrote a PCB quick-turn guide defining design constraints for faster prototyping with less downstream redesign.
  - Received the Display Department Outstanding Employee "Certificate of Excellence" (2026).
---

<!--
  PHOTOS: avionics hardware is often export-controlled or proprietary. Only add
  images your manager or export-compliance team has cleared for public release
  (for example a public product photo, or a generic test-setup shot).
  Put them in this folder and reference them like:
  ![Caption shown under the photo](./my-photo.jpg)
-->

## The role

I joined the avionics display group as a co-op and worked across the hardware lifecycle of cockpit display control panels: design changes, first-article bring-up, verification against requirements, and environmental qualification. Over the co-op, six panels moved through final production release to the customer.

## Level-shifted JTAG adapter

The Ethernet card on our display product needed a way to be programmed and debugged over boundary scan, which required level shifting between the card and the JTAG tooling. I designed a level-shifted adapter board in Altium and led its bring-up. It worked on the first spin. I then wrote its documentation and supported its qualification so it could be used on the production line.

## Chasing an EMI failure

During DO-160G qualification, a unit failed radiated emissions. I diagnosed the source as a high-speed clock and applied series damping to that clock line, which brought the unit into compliance and recovered about three weeks of schedule.

## Requirements and verification

A lot of avionics engineering is proving that the hardware does exactly what it should. I wrote more than 450 hardware requirements and 300 verification test cases in DOORS and maintained traceability from system requirements down to hardware tests through five formal PREP reviews. I also drafted Service Bulletins for the technical writers.

## Radiation-test rework

For a proton-radiation test of the flash memory, I modified the layout of a circuit card and rerouted more than ten signal lines so that two display units could be instrumented for the test.
