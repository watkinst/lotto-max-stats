import React from 'react';
import AccordionIntro from './Accordion/AccordionIntro';
import AccordionPanel from './Accordion/AccordionPanel';

require('../../../../sass/accordion.scss');

export default class Accordion extends React.Component {

  populatePanels() {
    var questions = [
      "What is Lotto Max?",
      "How is Lotto Max played?",
      "How are draws conducted?",
      "Why make LottoMaxStats.com?",
      "Is it hard to win Lotto Max?",
      "Do you still play Lotto Max?"
    ];

    var answers = [
      "Lotto Max is a Canadian Lottery with a minimum jackpot of ten million dollars and maximum jackpot of sixty million dollars. Additional prizes of one million dollars each (called Max Millions) are added when the jackpot reaches at least fifty million dollars. Draws are held every Friday night at 11:29:59PM Atlantic Time.",
      "Playing Lotto Max is as simple as picking seven numbers from a pool of 49 numbers (1 through 49). For each Lotto Max draw, seven regular numbers and one bonus number are drawn. Matching three out of seven draw numbers wins you the minimum prize of a free $5.00 Lotto Max ticket for the next draw. You need to match at least 5 out of 7 draw numbers to win any significant amount of money. Matching all seven draw numbers means you've won the jackpot.",
      "For the main draw, the set of winning Lotto Max numbers is still generated using traditional lottery ball-drop machines, each loaded with balls numbered between 1 and 49. Max Millions draw numbers are chosen with a certified random number generator.",
      "I made LottoMaxStats.com after playing Lotto Max for quite a while, unaware of just how terrible my chances were of ever winning the jackpot (or any significant amount of money). I knew that the odds were over 1 in 28 million that I would ever win, but I wondered just how bad those odds were. That is when I first made a rough version of the finished Lotto Max Draw Simulator you'll find on the home page of this site. I use the simulator and statistical information on this site to pick the numbers I will play in each Lotto Max draw. Statistically, it doesn't matter what numbers you pick. Your chances of winning are the same no matter what. However, I dislike picking lotto numbers individually, so using the most frequently drawn numbers or generating a set of random numbers with the 'Instapik' button on the Lotto Max Draw Simulator is easier and more convenient for me.",
      "Well, the odds are not in your favour. I have let my Lotto Max Draw Simulator run for the equivalent of over ten thousand years and still never matched all seven draw numbers (if you do match all seven numbers, the simulator will stop on its own). To put the difficulty of winning the Lotto Max jackpot into perspective, let's say you bought 1000 tickets. That would bring your relative odds of winning down from 1 in 28,633,528 to 1 in 28,633 - but those are still terrible odds. The Canadian Tire Centre in Ottawa, Ontario (home of the Ottawa Senators hockey team) has a maximum seating capacity of 19,153. So even after buying 1000 tickets (which would cost you a minimum of $5000), you would still need to be picked from a pool of people large enough to fill one and a half Canadian Tire Centres...and when have you ever been chosen for anything from a pool of people that large?",
      "Yes I do, despite knowing how badly the odds of winning are stacked against me. However, I do not play the optional Provincial games such as Encore, Tag, Twist, etc. I spend $5.00 on a basic ticket, having already accepted that I will probably never win. I play for the same reason as everyone else - because there is a chance of winning, no matter how incredibly small. I just don't get my hopes up high and then get disappointed when I lose...I expect to lose, and I save way more money than I spend on Lottery tickets. :)"
    ];

    var panels = [];

    for (var i = 0; i < questions.length; i++) {
      panels.push(
        {
          "name": i + 1,
          "question": questions[i],
          "answer": answers[i]
        }
      );
    }
    return panels;
  }

  render() {

    var panels = this.populatePanels();

    return (
      <div className="accordion-container">
        <AccordionIntro />
        <div className="panel-group" id="accordion">
          {panels.map(
            function(panel, index) {
              return (
                <AccordionPanel key={index}
                                name={panel.name}
                                question={panel.question}
                                answer={panel.answer} />
              );
            }
          )}
        </div>
      </div>         
    );    
  }
}