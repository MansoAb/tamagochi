const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function () {
    if (this.meal > 0 && this.energy > 0 && this.mood > 0) {
      console.log(
        `Имя: ${this.name}, Еда: ${
          this.meal < 3
            ? "Я голоден " + "(" + this.meal + ")"
            : "Я не голоден" + "(" + this.meal + ")"
        }, Енергия: ${
          this.energy < 3
            ? "Я хочу спать " + "(" + this.energy + ")"
            : "Я не хочу спать " + "(" + this.energy + ")"
        }, Настроение: ${
          this.mood < 3
            ? "Мне скучно " + "(" + this.mood + ")"
            : "Мне весело" + "(" + this.mood + ")"
        }.`
      );
    } else if (this.meal < 1) {
      console.log(this.name + " умер от голода :(");
    } else if (this.energy < 1) {
      console.log(this.name + " умер от нехватки энергии :(");
    } else if (this.mood < 1) {
      console.log(this.name + " умер от нехватки сна :(");
    }
  },
  setName: function (name1) {
    this.name = name1;
  },
  eat: function () {
    if (this.meal < 5) {
      this.meal += 1;
    }
    if (this.energy > 0 && this.meal > 0) {
      this.mood -= 1;
    }
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy += 1;
    }
    if (this.energy > 0 && this.mood > 0) {
      this.meal -= 1;
    }
  },
  play: function () {
    if (this.mood < 5) {
      this.mood += 1;
    }
    if (this.meal > 0 && this.mood > 0) {
      this.energy -= 1;
    }
  },
};
