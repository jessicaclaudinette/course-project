$(function(){

  $('#world-map').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    regionStyle: {
      initial: {
        fill: '#fca76c'
      },
      hover: {
        fill: '#b4dfe5'
      }
    },
    markerStyle: {
      initial: {
        fill: '#303c6c',
        stroke: '#fff',
        "stroke-width": 3,
        r: 10
      },
      hover: {
        fill: '#fff',
        stroke: '#303c6c',
        r: 10
      }
    },
    backgroundColor: '#f9f5ed',
    markers: [
      {latLng: [6.88, 31.31], name: 'South Sudan - Three quarters of girls do not receive even a primary education'},
      {latLng: [6.61, 20.95], name: 'Central African Republic - Nearly twice as many girls out of school as boys, one teacher per 80 students'},
      {latLng: [17.61, 8.08], name: 'Niger - Only 17% of girls aged 15 to 24 are literate'},
      {latLng: [33.94, 67.71], name: 'Afghanistan - Large gender gap, significantly more boys in school than girls'},
      {latLng: [15.45, 18.73], name: 'Chad - Very wide gender gap, women and girls face significantly wider range of barriers'},
      {latLng: [17.57, -2], name: 'Mali - Only 38% of girls complete primary school'},
      {latLng: [9.94, -9.6], name: 'Guinea - On average women aged 25 and above have attended school for less than 1 year'},
      {latLng: [12.23, -1.5], name: 'Burkina Faso - Only 1% of girls complete secondary school'},
      {latLng: [6.43, -9.43], name: 'Liberia - Almost 2/3 primary-age pupils not in school'},
      {latLng: [9.14, 40.48], name: 'Ethiopia - 2 in 5 girls married before they reach 18, nearly 1 in 5 before age 15'}
    ]
  });
});
