function enter(name) {
  const names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
  const position = names.indexOf(name);

  if (position >= 0) {
    console.log(`Found ${name} at position ${position}`);
  } else {
    console.log(`${name} not found in array`);
  }
}

enter('Cynthia');
enter('Joe');


function enter2(name) {
  const names = ['David', 'Mike', 'Cynthia', 'Raymond', 'Clayton', 'Mike', 'Jennifer'];
  const firstPos = names.indexOf(name);
  const lastPos = names.lastIndexOf(name);

  console.log(`First found ${name} at position ${firstPos}`);
  console.log(`Last found ${name} at position ${lastPos}`);
}

enter2('Mike')
