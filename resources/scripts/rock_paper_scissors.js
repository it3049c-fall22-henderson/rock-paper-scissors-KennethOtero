class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    let strChoice = "";
    let intRandom = Math.floor(Math.random() * 3);
    switch(intRandom) {
      case 0:
        strChoice = acceptedValues[0];
        break;
      case 1:
        strChoice = acceptedValues[1];
        break;
      case 2:
        strChoice = acceptedValues[2];
        break;
    }

    return strChoice;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection) return 'tie'; 
    else if (userSelection === 'rock' && cpuSelection === 'scissors') return 'win';
    else if (userSelection === 'paper' && cpuSelection === 'rock') return 'win';
    else if (userSelection === 'scissors' && cpuSelection === 'paper') return 'win';
    else return 'lose';
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    // Determine CPU selection
    let cpuSelection = this.generateCPUResponse();

    // Determine winner
    if (this.determineWinner(userSelection, cpuSelection) === 'win') {
      this.score.user++;
    } else if (this.determineWinner(userSelection, cpuSelection) === 'tie') {
      this.score.user++;
      this.score.cpu++;
    } else {
      this.score.cpu++;
    }

    // Log results
    let username = document.getElementById("username").value;
    let result = this.determineWinner(userSelection, cpuSelection);
    switch (result) {
      case 'win':
        result = username + "wins";
        break;
      case 'lose':
        result = username + "lost";
        break;
      case 'tie':
        result = "both tie!";
        break;
    }
    this.gameHistoryLog.push(username + " selected " + userSelection + ", CPU selected " 
                            + cpuSelection + ": " + result);
  }
}