/*Simulação*/
const thetas = [];
const probUp = [];
const probDown = [];

for (let i = 0; i <= 100; i++) {
  const theta = Math.PI * i / 100;
  thetas.push(theta);

  const cos = Math.cos(theta / 2);
  const sin = Math.sin(theta / 2);

  const psi0 = [1, 0];
  const rotationY = [
    [cos, -sin],
    [sin, cos]
  ];

  const psi = [
    rotationY[0][0] * psi0[0] + rotationY[0][1] * psi0[1],
    rotationY[1][0] * psi0[0] + rotationY[1][1] * psi0[1]
  ];

  probUp.push(psi[0] ** 2);
  probDown.push(psi[1] ** 2);
}

const traceUp = {
  x: thetas,
  y: probUp,
  mode: 'lines',
  name: 'Probabilidade |0⟩',
  line: { color: '#00ffcc' }
};

const traceDown = {
  x: thetas,
  y: probDown,
  mode: 'lines',
  name: 'Probabilidade |1⟩',
  line: { color: '#ff3366' }
};

Plotly.newPlot('plot', [traceUp, traceDown], {
  paper_bgcolor: '#222',
  plot_bgcolor: '#222',
  font: { color: '#eee' },
  xaxis: { title: 'Ângulo de rotação θ' },
  yaxis: { title: 'Probabilidade' }
});

