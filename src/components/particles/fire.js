import { MoveDirection, OutMode } from "tsparticles";

export default {
  background: {},
  particles: {
    number: {
        value: 0,
    },
    color: {
        value: "random",
    },
    shape: {
        type: "circle",
    },
    opacity: {
        value: 0.3,
    },
    size: {
        value: 10,
        random: {
            enable: true,
            minimumValue: 5,
        },
    },
    move: {
        angle: {
            offset: 0,
            value: 30,
        },
        enable: true,
        speed: 15,
        direction: 'top',
        random: false,
        straight: false,
        outModes: {
            default: 'destroy',
        },
    },
  },
  detectRetina: true,
  background: {
      color: "",
  },
  emitters: [
      {
          direction: 'top',
          position: {
              y: 100,
          },
          life: {
              duration: 3,
              delay: 5,
              count: 0,
          },
      },
  ],
};