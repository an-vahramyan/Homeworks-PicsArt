// 1. Interface Implementation (Device)
interface Device {
  turnOn(): void;
  turnOff(): void;
  setVolume(percent: number): void;
}

// 2. կոնկրետ Implemenation-ներ
class Tv implements Device {
  turnOn() {
    console.log("The TV is on");
  }

  turnOff() {
    console.log("The TV is off");
  }

  setVolume(p: number) {
    console.log(`TV volume: ${p}%`);
  }
}

class Radio implements Device {
  turnOn() {
    console.log("The radio is on");
  }

  turnOff() {
    console.log("The radio is off");
  }

  setVolume(p: number) {
    console.log(`Radio volume: ${p}%`);
  }
}

// 3. Abstraction (RemoteControl)
abstract class RemoteControl {
  protected device: Device; // Bridge

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    console.log("Turn on the power...");
    this.device.turnOn();
  }

  setVolume(percent: number) {
    this.device.setVolume(percent);
  }

  abstract displayInfo(): void;
}

// 4. կոնկրետ վահանակ
class BasicRemote extends RemoteControl {
  displayInfo() {
    console.log("Standard remote control");
  }
}

// 5. Refined Abstraction
class AdvancedRemote extends RemoteControl {
  displayInfo() {
    console.log("Advanced control panel");
  }

  mute() {
    console.log("Silent mode!");
    this.device.setVolume(0);
  }
}

// կիրառում
const tv = new Tv();
const radio = new Radio();

const basicRemoteForTv = new BasicRemote(tv);
const advancedRemoteForRadio = new AdvancedRemote(radio);

basicRemoteForTv.displayInfo();
basicRemoteForTv.togglePower();

advancedRemoteForRadio.displayInfo();
advancedRemoteForRadio.mute();
