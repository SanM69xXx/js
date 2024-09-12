// Variables con let
let mathGrade, scienceGrade, historyGrade, englishGrade, artGrade;
let physicalEdGrade, musicGrade, chemistryGrade, biologyGrade, philosophyGrade;
let totalGrades, averageGrade, finalMessage, failedSubjects;

// Variables con const
const numSubjects = 10;           // Número de asignaturas
const passingGrade = 6;           // Nota mínima para pasar
const excellentGrade = 9;         // Nota mínima para calificación excelente
const minGrade = 0;               // Nota mínima posible
const maxGrade = 10;              // Nota máxima posible

// Función para calcular la calificación final
function calculateFinalGrade() {
    // Pedir al usuario las notas de las 10 materias
    mathGrade = parseFloat(prompt('Ingrese la nota de Matemáticas (0-10):'));
    scienceGrade = parseFloat(prompt('Ingrese la nota de Ciencias (0-10):'));
    historyGrade = parseFloat(prompt('Ingrese la nota de Historia (0-10):'));
    englishGrade = parseFloat(prompt('Ingrese la nota de Inglés (0-10):'));
    artGrade = parseFloat(prompt('Ingrese la nota de Arte (0-10):'));
    physicalEdGrade = parseFloat(prompt('Ingrese la nota de Educación Física (0-10):'));
    musicGrade = parseFloat(prompt('Ingrese la nota de Música (0-10):'));
    chemistryGrade = parseFloat(prompt('Ingrese la nota de Química (0-10):'));
    biologyGrade = parseFloat(prompt('Ingrese la nota de Biología (0-10):'));
    philosophyGrade = parseFloat(prompt('Ingrese la nota de Filosofía (0-10):'));

    // Verificar que las notas estén en el rango válido
    if ([mathGrade, scienceGrade, historyGrade, englishGrade, artGrade, physicalEdGrade, musicGrade, chemistryGrade, biologyGrade, philosophyGrade].some(grade => grade < minGrade || grade > maxGrade)) {
        console.log('Por favor, ingresa notas válidas entre 0 y 10.');
        return;
    }

    // Calcular el total de las notas
    totalGrades = mathGrade + scienceGrade + historyGrade + englishGrade + artGrade + physicalEdGrade + musicGrade + chemistryGrade + biologyGrade + philosophyGrade;

    // Calcular el promedio de las notas
    averageGrade = totalGrades / numSubjects;

    // Calcular el número de asignaturas reprobadas
    failedSubjects = [mathGrade, scienceGrade, historyGrade, englishGrade, artGrade, physicalEdGrade, musicGrade, chemistryGrade, biologyGrade, philosophyGrade].filter(grade => grade < passingGrade).length;

    // Determinar el mensaje final usando el operador ternario
    finalMessage = averageGrade >= excellentGrade ? '¡Excelente trabajo!' :
                   averageGrade >= passingGrade ? `Aprobado, buen trabajo. Has reprobado ${failedSubjects} asignatura(s).` :
                   `No has aprobado, sigue esforzándote. Has reprobado ${failedSubjects} asignatura(s).`;

    // Mostrar los resultados en la consola
    console.log(`Notas: Matemáticas: ${mathGrade}, Ciencias: ${scienceGrade}, Historia: ${historyGrade}, Inglés: ${englishGrade}, Arte: ${artGrade}, Ed. Física: ${physicalEdGrade}, Música: ${musicGrade}, Química: ${chemistryGrade}, Biología: ${biologyGrade}, Filosofía: ${philosophyGrade}`);
    console.log(`Promedio: ${averageGrade.toFixed(2)}`);
    console.log(finalMessage);
}

// Llamar a la función para calcular la calificación final
calculateFinalGrade();
