# Counter
A basic anchor application which creates counter program on the solana chain with initial value 0.
It has an increment instruction which will increment the counter count by 1

## My Learning
1. The general flow of smart contracts follows including eveyrything from anchor prelude, declaring a program id
2. An Initializer instruction to initiate the program on chain and other buisness logic instruction
3. An instruction contains a function which will be expose through api and every intruction will have a struct associated to it
4. Another struct for the type of data we gonna store on chain
5. Initialize struct contains the user account and system_program which is compulsary and the addtional account for data
6. Usage of lifetime('info) and comman rust method like attributes and derive macros
7. Anchor tests include calling smart contract api from typescript with creating a keypair and set the anchor environment


And that's sum up this small basic program
