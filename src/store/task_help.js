// Helped class for Task
export default class Task {
    constructor (
      grade,
      title,
      imgURL,
      place,
      description,
      additionalInformation,
      price,
      fuelSurcharge,
      user = null,
      id = null
    ) {
      this.grade = grade
      this.title = title,
      this.imgURL = imgURL,
      this.place = place
      this.description = description
      this.additionalInformation = additionalInformation
      this.price = price
      this.fuelSurcharge = fuelSurcharge
      this.user = user
      this.id = id
    }
  }
  