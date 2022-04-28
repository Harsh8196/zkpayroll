import web3 from './web3_'
import ZKPayrollAbi from '../abi/ZKPayroll.json'


const instance = new web3.eth.Contract(ZKPayrollAbi.abi,'0x6999bA844230435e15cC31d9251577dAeEb9fD35')  
// console.log(instance)

export default instance

