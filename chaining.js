const myObject = { x: 45, y: 12, z: 99, a: "ratul mullla", b: 'koribulla' }
const { x, a } = myObject;

// console.log(x, a);

// Array destructuring 
const [bestu, faltu,age,midtu] = ['rifat', 'bibat',34, 'tini'];
// console.log(bestu);
// console.log(faltu);
// console.log(midtu);
// console.log(age + 5);

// optional sine(?)

const myCompany = {
    name: "Gramminphone",
    ceo: "nikolas pritho",
    web:{
       pragramming: "js",
        fremworek: 'react',
        product: "fortend Websit",
        works:{
            cuntry: "Banglades",
            outdore: "India",
            empley: 36
        }
    }
}

const {cuntry} = myCompany?.web?.works;
console.log(myCompany.web?.backend?.program);
console.log(cuntry);