export default {
  title: 'Utils/Variables',
};

const colors = [
  'graphite',
  'midnight',
  'electricity',
  'green',
  'yellow',
  'red',
];

const mainColors = [
  'midnight',
  'electricity',
  'white',
  'orange',
  'lime',
  'plum',
  'rose',
  'black',
];

const scales = ['05', '10', '20', '30', '40', '50', '60', '70', '80', '90'];

export const Variables = () => {
  return `<div> <h2>Main colors</h2>
  <p>Click to copy the variable to your clipboard</p>
    ${mainColors.map((color) => {
      const hex = getHex(`--tk-${color}`);

      return `<div
        class="tk-card"
        style="background-color: var(--tk-${color}); cursor: pointer; max-width: 30rem;"
        onclick="navigator.clipboard.writeText('--tk-${color}')"
      >
        <div class="tk-m-1" style="display: flex; justify-content: space-between">
          <span style="color: #000"> --tk-${color} ${hex}</span> <span style="color: #fff">--tk-${color} ${hex}</<span>
        </div>
      </div>`;
    }).join('<br/>')}
      ${colors.map(
        (color) =>
          `<div><h2>${color.toUpperCase()}</h2>
          <p>Click to copy the variable to your clipboard</p>
          ${scales.map((scale) => {
            const hex = getHex(`--tk-${color}-${scale}`);
            return `<div
              class="tk-card"
              style="background-color: var(--tk-${color}-${scale}); cursor: pointer; max-width: 30rem;"
              onclick="navigator.clipboard.writeText('--tk-${color}-${scale}')"
              >
              <div class="tk-m-1" style="display: flex; justify-content: space-between">
              <span style="color: #000"> --tk-${color}-${scale} ${hex}</span> <span style="color: #fff">--tk-${color}-${scale} ${hex}</<span>
              </div>
            </div>`;
          }).join('<br/>')}
        </div>`
      ).join('<br/>')}

    </div>`;
};

const getHex = (string) =>
  getComputedStyle(document.querySelector('#root')).getPropertyValue(string);
