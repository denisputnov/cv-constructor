import { makeAutoObservable } from "mobx";

export type PaddingSettingModes = 'all' | 'topbottom' | 'leftright' | 'top' | 'bottom' | 'left' | 'right'
export type Paddings = {
  top: number,
  left: number,
  right: number,
  bottom: number
}

class EditorSetitns {
  paddings: Paddings = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  }

  constructor() {
    makeAutoObservable(this)
  }

  setPadding(value: number, type: PaddingSettingModes = 'all') {
    if (!value) return;
    switch (type) {
      case 'all': 
        this.paddings = {
          top: value,
          left: value,
          right: value,
          bottom: value
        }
        break
      case 'topbottom':
        this.paddings = {
          ...this.paddings,
          top: value,
          bottom: value 
        }
        break
      case 'leftright':
        this.paddings = {
          ...this.paddings,
          left: value, 
          right: value
        }
        break
      default:
        this.paddings = {
          ...this.paddings,
          [type]: value
        }
        break
    }
  }
}

export default new EditorSetitns();
