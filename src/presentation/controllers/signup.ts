export class SignupController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      statusBody: new Error('Missing param: name')
    }
  }
}
