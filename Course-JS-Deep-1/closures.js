const globalVariable = 'global var';

function outterFunc(param1) {
  const variable1 = 'var one';

  function innerFunc(param2) {
    const variable2 = 'var two';

    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }

  innerFunc('param one');
}

outterFunc('param two');