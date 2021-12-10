class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(200, 'OK');
    this.map.set(400, 'Bad Request');
  }

  translate(code) {
    if (!this.map.has(code)) {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}

export default ErrorRepository;
