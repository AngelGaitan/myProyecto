

students = [
    { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 },
  ]
  countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
  ]
  countryName = 'Colombia'





function countStudents(students, countries, countryName) {
    // escribe tu solución aqui
    for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (students[i].country_id === countries[j].id) {
          students[i].cName = countries[j].name
        }
      }
    }
  
  
    let counter = { countryName: countryName, times: 0 };
  
    for (paises of students) {
  
      if (paises.cName === counter.countryName) {
        counter.times += 1;
      }
  
    }
    return counter.times
  }

  console.log(countStudents(students, countries,countryName))