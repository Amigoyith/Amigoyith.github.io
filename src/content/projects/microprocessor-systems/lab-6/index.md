---
title: IoT Temperature Sensor & Web Server
label: Lab 6
context: E155 Lab 6 · Fall 2024
summary: An STM32 reads a DS1722 temperature sensor through a register-level SPI driver I wrote, and serves live readings, adjustable resolution and LED control on a web page through an ESP8266.
tags: [STM32, SPI, UART, ESP8266, Embedded C, Logic analyzer]
cover: ./images/web-display.jpg
coverAlt: The web page showing temperature readings at different resolutions
order: 6
---
The goal was an internet-connected temperature sensor. An STM32L432KC microcontroller talks to a DS1722 digital temperature sensor over SPI and to an ESP8266 Wi-Fi module over UART. Anyone on the network can open a web page to see the current temperature, change the sensor's resolution from 8 to 12 bits, and switch an LED on the board on or off.

![Wiring between the STM32 and the DS1722 sensor](./images/hardware.jpg)

## Firmware design

I used CMSIS for hardware abstraction and wrote the SPI driver myself at the register level. The code is split into three layers:

- **SPI and USART drivers.** SPI is configurable for baud rate, clock polarity and clock phase so it can work with other peripherals, and runs full-duplex with 8-bit frames. The transfer routine waits on the TXE flag before sending and the RXNE flag before reading, and accesses `SPI1->DR` through a `volatile` pointer so the compiler can't reorder or drop register accesses.
- **DS1722 driver.** It reads the two temperature bytes, combines them into a 16-bit signed fixed-point value (`hi << 8 | lo`), and divides by 256 to get degrees Celsius.
- **Web server.** It parses HTTP GET requests from the ESP8266 to set the LED and resolution, and builds the response page.

## Testing

I checked the sensor's range by warming it with a finger and cooling it with canned air to get readings below zero. Then I confirmed the SPI transactions on a logic analyzer: clock, chip select, CIPO and COPI from top to bottom.

![A single temperature read on the logic analyzer](./images/spi-single.jpg)

![SPI traffic during a page refresh](./images/spi-all.jpg)

## Lessons

Most of my debugging time went into SPI configuration, and into a broken breadboard wire that caused intermittent connections. That second problem is why I now check physical connections with a meter before assuming a bug is in the code.
