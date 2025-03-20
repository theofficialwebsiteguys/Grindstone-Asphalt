import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faqs = [
    {
      question: 'How long does it take to sealcoat?',
      answer: 'It really depends on the size and condition of the driveway prior to our arriving. If it is an average-sized driveway that is mildly clean, it should take about 2 hours for the entire process.',
      open: true
    },
    {
      question: 'How long should I stay off the driveway after the sealcoat is applied?',
      answer: 'You cannot walk on the driveway for 24 hours after completion and you cannot drive on the driveway until it has been 2 full days since (48 hours) completion.',
      open: false
    },
    {
      question: 'Do you spray sealcoat or squeegee?',
      answer: 'The answer to this question is both. We use a squeegee for hand work near garage doors, patios, walkways, walls, etc. Once free and clear with nothing around, we spray the rest of the driveway in. We make sure to leave everything around your property undamaged so it looks the very same it did when we arrived.',
      open: false
    },
    {
      question: 'What do you charge per square foot?',
      answer: 'The price we charge per square foot depends on the size of your driveway and the quality of the existing asphalt. If it is a very large driveway or parking lot we charge less per square foot, and if it is a very small driveway we charge our minimum charge of $400. This way all of our prices are fair and it gives every customer the option to be able to afford an upgrade to their home and protect their asphalt.',
      open: false
    },
    {
      question: 'How long does the sealcoat last?',
      answer: 'This answer varies, on brand new asphalt a sealcoat can sometimes last up to 4-5 years. But on very damaged or old asphalt, a sealcoat may only last from 1-3 years. It truly is dependent on the current condition of your asphalt. Ask one of our professionals when they come out to give you an estimate!',
      open: false
    },
    {
      question: 'What type of Sealer do you use?',
      answer: 'We use a water based, coal tar sealer. We get our sealer from Sealmaster in Millbury MA. ',
      open: false
    },
    {
      question: 'What separates Grindstone Sealcoating from the other companies around?',
      answer: 'While other companies around us may use the ame or similar products, Grindstone Sealcoating stands out from the others with the promise of high quality work, service and customer satisfaction.',
      open: false
    },
    {
      question: 'As a customer, what can we do to prepare for your arrival to the jobsite?',
      answer: ' The only thing we ask of our customers is to have everything out of the driveway before our arrival. That way we can arrive and swiftly start on your project! ',
      open: false
    },
    {
      question: 'As a customer, at what time in the job process do we need to pay? Also what are our payment options?',
      answer: 'We ask for payment to be made upon completion of the job! We take cash, check and credit or debit cards!',
      open: false
    },
    {
      question: 'What is the process of sealcoating from start to finish?',
      answer: ' The first step to the process when we arrive on scene is to make sure all debris is removed from the driveway. This may include sand, dirt, moss and weeds. The next step is to clean the edges of the driveway to expose all existing asphalt. Once this is complete we fill all of the cracks with hot rubber. Finally we start to sealcoat. Once sealcoating is complete we block off the end of the driveway to assure no one drives on it!',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
    // If you want only one item open at a time, you can close all other items with:
    // this.faqs.forEach((faq, i) => {
    //   if (i !== index) faq.open = false;
    // });
  }
}
