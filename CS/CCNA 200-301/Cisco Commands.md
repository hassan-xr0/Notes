## Basic

| Commands                                      | Details                                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| `hostname>enable`or`en`                       | switch to Privileged EXEC                                                               |
| **configur termial** or **conf t**            | switch to global config mode                                                            |
| hostname your-device-name                     | change your device name (need conf t)                                                   |
| **show startup-config** or **running config** | shows the file of respective command                                                    |
| **enable password** *your-pass*               | not safe cna be viewed in config                                                        |
| **service password-encryption**               | - encrypts passwords in config file. <br>- can be decrypt <br>- not safe                |
| **enable secret** *your-pass*                 | - safer than above<br>- encrpyted in MD5                                                |
| **no** *command*                              | removes commands                                                                        |
| do command                                    | this runs the commands in Global config mode  that can only run in Privileged Exec mode |
# [[7-8 .IPv4 Addressing]]

| Commands                           | Details                                                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| show ip interface brief            | show interface details (need privileged exec mode)                                                        |
| interface {name of interface/g0/0} | configure the interface name can (gigabitethernet0/0 etc)<br>require `configure terminal`mode             |
| ip address {ip address } 255.0.0.0 | assigned IP address to interface of router after writing IP address you need tell it the subnet (netmask) |
| no shutdown                        | this start the router interface because all interface are down by defualt                                 |
| show interfaces {g0/0}             | Tell details about the written interface                                                                  |
| show interfaces description        | show the description of all interfaces                                                                    |
| description {PC1}                  | writes description of that interface<br>- need to be in configure interface mode                          |
|                                    |                                                                                                           |

## Routing

| Commands                                            | Details                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| show ip route                                       | show the routing table                                                                                 |
| **ip route** *ip-address* *netmask next-hop*        | - here ip-address = dest ip address <br>- next hop = next router route<br>- its used in config modefff |
| **ip route** *0.0.0.0 0.0.0.0 192.168.9.2*          | this set the default route <br>deofault routes are sued send data outside of newrk                     |
| ==no== **ip route** *ip-address* *netmask next-hop* | this removs the route                                                                                  |
## VLANs


| Commands                  | Details                                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **show vlan brief**       | show the list of VLANs on switch                                                                                                                                            |
| interface range *g1/0 -3* | this means configure interface g1/0 to 3 not just one interface<br>we need to be interface configure mode for VLANs                                                         |
| switch  mode access       | this make all the interface that we enter above in to configure the access point of a VLAN<br>keep in mind we need to be in  interface conf mode                            |
| switchport access vlan 10 | this makes VLAN 10 ( if not made ) and  above steps important and should be done before making creating or adding in a VLAN or else the interface will not be added to VLAN |
| vlan 10                   | for changing the name we first chose which vlan                                                                                                                             |
| name *'NAME OF VLAN*      | this change the name of VLAN (i.e. Sales, HR, Engineering etc)                                                                                                              |

## Trunk Configuration

first configure interface with `interface g0/0` (g0/0 replace it with your unterface )

| Commands                                  | Details                                                                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `switchport trunk encapsulation dot1q`    | It tell the switch use 802.1Q for trunking and not ISL<br>we first has to manually set encapsultion to 802.1q or ISL             |
| `switchport mode trunk`                   | it made the interface we chose when configuring trunk port                                                                       |
| `show interfaces trunk`                   | list all the trunk port                                                                                                          |
| `switchport trunk allowed vlan 10,30`     | It allow from which  VLAN the traffic should recieve<br>(in case here on[[Cisco Commands]]ly VLAN 10,30 traffic will be allowed) |
| `switchport trunk allowed vlan add 20 `   | It adds additional VLAN to the current list<br>                                                                                  |
| `switchport trunk allowed vlan except 1`  | It adds all VLAN except for VLAN you wirte                                                                                       |
| `switchport trunk allowed vlan remove 20` | It remove VLAN                                                                                                                   |
| ``switchport trunk natice vlan 1001`      | It change the native VLAN from 1 to your desired value                                                                           |
## ROAS
first configure the interface your desired interface you want to divided into sub-interface. I am going to use g0/0

| Commands                                | Details                                                             |
| --------------------------------------- | ------------------------------------------------------------------- |
| `interface g0/0.10`                     | make the sub-interface                                              |
| `encapsulation dot1q 10`                | tells the router any thing  from VLAN 10 should be recieve here<br> |
| `ip address 192.19.160.52 55.255.255.0` | this assign the ip addres to it                                     |
## Native VLAN ROAS

When we configure native VLAN on switch we also need to configure it on Router 

| Commands                             | Details                                         |
| ------------------------------------ | ----------------------------------------------- |
| encapsulation dot1q *vlan-id* native | sets the sub-interface to native VLAN on router |
| no interface *interface-id*          | deletes the interface                           |
## SVI Routing
For Point To Point connection we use this (when connecting to a Router) 

| Commands      | Details                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ip routing    | enables the Layer 3 routing on the switch                                                                                |
| no switchport | this command changes the Layer 2 interface to Layer 3 (for this you should be in interface config mode `interface g0/0`) |
For inter-VLAN Routing we use this 

| Commands                           | Details                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| interface *vlan-id*                | For creating a SVI for that VLAN                                                                       |
| ip address *0.0.0.0* *subnet-mask* | this will assign the IP to the VLAN that you configure above (this is same as assigning IP in router ) |
| no shutdown                        | SVIs are shutdown by default                                                                           |
