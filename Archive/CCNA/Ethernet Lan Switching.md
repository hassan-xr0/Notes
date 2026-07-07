

# Ethernet Frame 
![[Pasted image 20260112233345.png]]

> [!info]
> Notice in Ethernet frame trailer is a front and header back compare to normal

Ethernet Frame is divied into three section 👇
![[Pasted image 20260112233316.png]]


# Eth.Header

## Preamble:
- 7 byte (7 * 8 bits)
- its not the actual data it tells the receiving device about the data that is coming
- 10101010 * 7 alternating 0 and 1
## SFD
- Start Frame Delimiter
- 1 byte
- 10101011
- Marks where the real frame begins

**💡 Analogy**
Think of the preamble as the _knock on the door_ before you start talking — it ensures the other person is ready to listen. The SFD is like  saying, _“Okay, now I’m starting my sentence.” 
## Destination and Source
- ![[Pasted Image 20250812000048_298.png]]
- Tells devices that are sending and receiving the frame like in email (to and from)
- Addresses use in Ethernet are destination and source  "MAC Address"
- Media Access Control = 6 byte (6 * 8 bits) address of physical device

## Type or Length
- It can be used to represent type or length of the packet
- 2 byte (16bits)
- if value is 1500 or less means length of packet(in bytes0
- value of 1536 or greater means the type of packet
- type can be IPv4 or IPv6

> [!NOTE]
> - IPv4 = 0x0800 (hexadecimal) 2048 Decimal
> - IPv6 = 0x86DD   34525 decimal

  

# Eth.Trailer

## Frame Check sequence:
- It detect error in data by running CRC algorithm
- CRC = Cyclic Redundancy Check
-  4 byte (32bits)



# MAC Address
![[Pasted image 20260113013436.png]]
- 6 bytes(48 bits)
- It is a physical address assigned to the device when its is made
- it is also known as BIA "Burned In Address"
- First 3 byte (starting 6 character) are OUI(Organizationally Unique Identifier) which is assigned to the company making the device 
- It unique globally
- Last 3 byte are unique to device like IP
![[Pasted Image 20250812000935_718.png]]
For example Cisco Devices have same first 5 character in in their MAC address or any
other company devices

## MAC Address Table
When a device sends data, it includes the source and destination MAC addresses in the
frame. If PC1 sends data to PC3,, if the switch don't have the its address it records
PC1’s MAC (dynamic learning). If the destination MAC is in its table, it forwards the
frame to the correct port; otherwise, it floods all ports except the sender’s
![[Pasted Image 20250810233643_230.png]]
**Unicast Frame: Sent to a single specific device.**
**Unknown Unicast: Destination MAC not in the switch’s table 👉 flooded to all ports except the source.**
**Known Unicast: Destination MAC is in the switch’s table 👉 forwarded only to the correct port.**


> - Unknown Unicast = FLOOD
> - Known Unicast = FORWARD
> - Each interface in Swithces and router have spereate MAC Add



![[Pasted image 20260113015151.png]]
- Minimum size for ethernet frame is 64byte (Header + Payload + Trailer)
- 64 byte - 18byte(header and trailer) = 46 byte
- So the minimum size of a payload(Packet) can only be 46 byte 
- If Payload is smaller than 46 byte than padding byte are added
![[Pasted image 20260113015309.png]]

- **Example** :  if a payload is 34 byte then 12byte are added called padding byte

We know that If we want to send data to a device we need to have Source and Destination MAC Address. So if a device
don't have destination MAC address what will it do 

> [!NOTE]-
> Switches are Layer 2 Devices they can only use MAC address cannot use IP Address

# ARP

So for this we ARP (Address Resolution Protocol). Its discover layer 2 Address of a known address. It consist of 2 message

- **ARP Request :** This broadcast to all device. This request contain SRC MAC Address and DST is FFFF . FFFF . FFFF

- **ARP Reply :** It is unicast. sent only to on e device ( that requested )

- PING used ICMP like ARP it also sends Reply and request
- But its does not broadcast it unicast
![[Pasted Image 20250812170539_761.png]]
