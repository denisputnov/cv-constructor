import { makeAutoObservable } from "mobx";

export type GlobalInfo = {
  name: string,
  surname: string, 
  country: string,
  relocation: boolean,
  position: string
}

export type LanguageLevel = "Beginner" | "Elementary" | "Intermediate" | "Upper Intermediate" | "Advanced" | "Proficiency"
export type Language = {
  name: string,
  level: LanguageLevel
}

export type Contact = {
  name: string,
  value: string
}

export type Experience = {
  time: {
    start: string
    end: string
  }
  companyName: string
  position: string
  description: string
}

class UserData {
  image: string | null = null

  global: GlobalInfo = {
    name: '',
    surname: '', 
    country: '',
    relocation: false,
    position: ''
  }

  contacts: Contact[] = []
  language: Language[] = []
  skills: string[] = []
  experience: Experience[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addExperience() {
    this.experience.push({
      time: {
        start: '',
        end: 'Present'
      },
      companyName: '',
      position: '',
      description: ''
    })
  }

  setExperience(index: number, key: Exclude<keyof Experience, 'time'> | 'start' | 'end', value: string) {
    if (key !== 'start' && key !== 'end') {
      this.experience[index] = {
        ...this.experience[index],
        [key]: value
      }
    } else {
      this.experience[index] = {
        ...this.experience[index],
        time: {
          ...this.experience[index].time,
          [key]: value
        }
      }
    }
  }

  deleteExperience(index: number) {
    this.experience = this.experience.filter((_, idx) => index !== idx)
  }

  setNewImage(base64string: string | null) {
    this.image = base64string
  }

  setGlobal(key: keyof GlobalInfo, value: string | boolean) {
    this.global = {
      ...this.global,
      [key]: value
    }
  }

  addContact(name: string) {
    this.contacts.push({name, value: ""})
  }

  removeContact(index: number) {
    this.contacts = this.contacts.filter((_, idx) => index !== idx)
  }

  setContactValue(index: number, value: string) {
    this.contacts[index].value = value
  }

  setContactName(index: number, name: string) {
    this.contacts[index].name = name
  }

  addLanguage(name: string) {
    this.language.push({ name, level: "Intermediate" })
  }

  removeLanguage(index: number) {
    this.language = this.language.filter((_, idx) => index !== idx)
  }

  setLanguageLevel(index: number, level: LanguageLevel) {
    this.language[index].level = level
  }

  setLanguageName(index: number, name: string) {
    this.language[index].name = name
  }

  addSkill(name: string) {
    this.skills.push(name)
  }

  removeSkill(name: string) {
    this.skills = this.skills.filter((skill) => skill !== name)
  }
} 

export default new UserData();
