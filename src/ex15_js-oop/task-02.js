class electricAppliance {
    constructor(power, type, name) {
      this.enabled = false;
      this.power = power;
      this.name = name;
      this.type = type;
    }
    disable() {
        this.enabled = false;
        return this;
      };
  
    enable() {
      this.enabled = true;
      return this;
    };
    isEnabled() {
        return this.enabled;
      };
    getPower() {
      return this.power;
    };
  
    getElectricName() {
      return this.electricName;
    };
  }
  
  class Computer extends electricAppliance {
    constructor(power, name) {
      super();
      this.power = power;
      this.type = 'computer';
      this.name = name;
    }
  }
  
  class Shaver extends electricAppliance {
    constructor(power, name) {
      super();
      this.power = power;
      this.type = 'shaver';
      this.name = name;
    }
  }
  
  class Room extends electricAppliance {
    constructor(electricAppliance) {
      super();
      this.electricAppliance = electricAppliance;
    }
    searchElectricAppliance(name) {
        return this.electricAppliance.filter(item => item.getElectricName() === name);
      };
    getPower() {
      let power = 0;
      this.electricAppliance.forEach(item => {
        if (item.isEnabled()) {
          power += item.getPower()
        }
      });
      return power;
    };
  }