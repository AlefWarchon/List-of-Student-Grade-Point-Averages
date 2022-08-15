//Variables
let students, vowels = 'O';

students = [
  {name: 'Luiza',
    age: 22,
    noteOne: 3,
    noteTwo: 7,
    sexo: 'feminino'
  }, 

  {name: 'Sarah',
    age: 35,
    noteOne: 9,
    noteTwo: 7,
    sexo: 'feminino'
  }, 

  {name: 'Milena',
    age: 37,
    noteOne: 7,
    noteTwo: 9,
    sexo: 'feminino'
  }, 

  {name: 'Davi',
    age: 45,
    noteOne: 9,
    noteTwo: 2,
    sexo: 'masculino'
  }, 

  {name: 'Danilo',
    age: 45,
    noteOne: 3,
    noteTwo: 2, 
    sexo: 'masculino'
  },

  {name: 'Stephany',
    age: 50,
    noteOne: 2,
    noteTwo: 2,
    sexo: 'feminino'
  }
]

//Functions
function mediumNotes (person) {
  return (person.noteOne + person.noteTwo) / 2
}

for(let student of students) {
  if(student.sexo === 'feminino') {
    vowels = 'A'
  } else if (student.sexo === 'masculino') {
    vowels = 'O'
  }
  if(mediumNotes(student) >= 7) {
  students.push(alert(`${vowels} estudante ${student.name} de ${student.age} anos 

Obteve a média das notas de: ${mediumNotes(student)}

Parabéns! 
Você passou no concurso!
`))} else {
  students.push(alert(`${vowels} estudante ${student.name} de ${student.age} anos 

Obteve a média das notas de: ${mediumNotes(student)}
  
Infelizmente não foi dessa vez!
Tente novamente no próximo concurso!
`))}}

