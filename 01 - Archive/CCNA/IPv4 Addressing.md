# IPv4 Address

IPv4 is a logical address. It is like MAC address but used at layer 3. It is not assigned when it is made but when connected to network. Its a 32bit
and 4 byte address. The IP we see is Decimal base because in bits very complex and lengthy
- 32 bits = 8+8+8+8
- Decimal = base10
- Binary = base2

![[Pasted image 20260112230132.png | 300]]

# Binary To Decimal
To convert binary to decimal we need to calculate like the following

Binary is base-2, meaning each place value doubles from right to left (1, 2, 4, 8 … 128). To convert, check each bit: if it’s 1, add its value; if it’s 0, skip it.

Each bit represents a power of 2, starting from right -> 1,2,4,8,16

- If bit = 1, add that value.
- If bit = 0, skip it.

Example: 10001111
   128+8+4+2+1=143
![[Pasted Image 20250814193313_033.png]]
# Decimal To Binary

To convert a decimal number to binary (like turning an IPv4 value into bits),
start from the left with the largest binary place value. Subtract it from the
decimal number if possible—if it can be subtracted, write 1; if it cannot,
write 0. Continue moving to the next smaller place value until you reach 1.
![[Pasted Image 20250813214129_399.png]]

For example, converting 13 to binary:

- The largest place value less than 13 is 8, so subtract 8 and write 
  (remainder = 5).
- Next is 4, which fits in 5, so subtract 4 and write 1 (remainder = 1).
- Next is 2, which is larger than 1, so write 0.
- Finally, 1 fits in the remainder, so subtract 1 and write 1.

This gives 1101 in binary.
![[Pasted Image 20250813214444_552.png]]

# IPv4 Addresses Portion

IP Address is divided in to two portion one network portion and other host
portion. To identify this we use Prefix Length or Netmask
![[Pasted Image 20250813214833_751.png]]
### Prefix Length
![[Pasted image 20260112230428.png]]
This means first /24 bits are network portion. 
- /16 = first 16 bits (192.168.0/16)
- /8 = first 8 bits (255.0.0.0)
### Netmask
![[Pasted image 20260112230624.png]]
This means first 225.255.255.0 bits are network portion. 
- 255.255.0.0 = first 16 bits (/16)
- 255.0.0.0 = first 8 bits (/8)

# Loopback Address

address range of 127.0.0.0 is for network test meaning if I ping the IP of 127.0.0.0 or any other which is starting with 127 from my computer then it will send the packets to itself 
![[Pasted Image 20250815221213_657.png]]

# IPv4 Classes

 IP is divided into five categories

- Notice in class A First octet start with 0 and numeric range is 127, its addition of all 7 bits except for first bit which zero

![[Pasted image 20260112231014.png]]

# Classes in Prefix

- In class number of host are greater and network are less
- In class B both are balance
- In Class C Network are greater and host are less
![[Pasted Image 20250813220635_083.png]]

- 192.168.0.0/24 (network portion is all 0 bits) is a network address
- The first address of network is network address and the last address of network is a broadcast address
- Host portion of network  all "0" = network address
- It cannot be assigned to a host
- Host portion all 1s(bits) = broadcast address
![[Pasted Image 20250816221859_361.png]]

***Maximum Host per network = 2^n - ==2***==
where n = number of host portion and ==-2== refer o the network and broadcast address 
**Example:**
10.0.0.0/8 -> 24 bits are host so = 2^24 -2 = 16,777,,214

Commands related to IP addressing in Cisco router 👉 [[Cisco Commands]]
