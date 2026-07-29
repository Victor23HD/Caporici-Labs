# Caporici Labs

Developer-first laboratories for automotive and mission-critical software.

## Automotive Lab 001 — CAN Frame Explorer

The first public demo turns a raw 11-bit CAN identifier and 8-byte payload into
an inspectable frame. It explains arbitration priority and shows the payload in
hexadecimal, decimal, binary, and ASCII without pretending to decode signals
that require a DBC file.

Open `index.html` directly in a browser. No build step or dependencies are
required.

## Direction

This repository will grow into a practical automotive engineering hub covering:

- CAN and CAN FD
- SAE J1939 and heavy-vehicle telemetry
- Linux/C++ at the edge
- DBC decoding and diagnostic workflows
- MQTT pipelines from vehicle to cloud
- AUTOSAR and functional-safety maps

The goal is not to replace standards. It is to make the path from a standard to
a working developer mental model shorter.
