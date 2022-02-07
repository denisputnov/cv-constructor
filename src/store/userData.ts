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

export type Education = {
  time: {
    start: string
    end: string
  },
  name: string
  speciality: string
  grade: string
}

export type Summary = {
  image: string | null
  global: GlobalInfo
  contacts: Contact[]
  language: Language[]
  skills: string[]
  experience: Experience[]
  education: Education[]
}

class UserData {
  image: string | null = null

  global: GlobalInfo = {
    name: '',
    surname: '', 
    country: '',
    position: '',
    relocation: false
  }

  contacts: Contact[] = []
  language: Language[] = []
  skills: string[] = []
  experience: Experience[] = []
  education: Education[] = []

  constructor() {
    makeAutoObservable(this)
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

  addEducation() {
    this.education.push({
      time: {
        start: '',
        end: ''
      },
      name: '',
      speciality: '',
      grade: ''
    })
  }

  setEducation(index: number, key: Exclude<keyof Education, 'time'> | 'start' | 'end', value: string) {
    if (key !== 'start' && key !== 'end') {
      this.education[index] = {
        ...this.education[index],
        [key]: value
      }
    } else {
      this.education[index] = {
        ...this.education[index],
        time: {
          ...this.education[index].time,
          [key]: value
        }
      }
    }
  }

  deleteEducation(index: number) {
    this.education = this.education.filter((_, idx) => index !== idx)
  }

  get summary(): Summary {
    return {
      image: this.image,
      global: this.global,
      contacts: this.contacts,
      language: this.language,
      skills: this.skills,
      experience: this.experience,
      education: this.education
    }
  }

  // converToUrlParams(): string {
    
  // }
} 

export default new UserData();
