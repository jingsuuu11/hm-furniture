import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React, { Fragment, useState } from 'react'
import Collapsible from 'react-collapsible';
import "./AboutImg.css"


const Question = [
    {
        id: "1",
        question: "How do I return an item?",
        answer: "You have lots of options available to you. We offer a 30 day returns policy, where you can return your item(s) to one of our Argos stores or Argos stores within a Sainsbury's supermarket for a refund or exchange. If your order was delivered to you, you can also arrange a collection via our customer services team on 0345 640 2020. Please see our latest store updates on where and how you can safely return your items."
    },
    {
        id: "2",
        question: "Can I make changes to my online order?",
        answer: "We all change our mind now and again. If you want to make any changes to your order, email us, contact us via Live Chat or call us for free on 0800 804 8879 for further assistance. Please keep in mind that not every piece of furniture is the same, so there might be variations between batches. Also, changing your order may delay your delivery and could alter the price you’ve been quoted. Please note that changes to your order can only be made prior to delivery. Please refer to our Returns and Cancellations for more details."
    },
    {
        id: "3",
        question: "What if my order is late?",
        answer: "Please don’t worry. We’ll let you know straight away if your estimated delivery time has changed. Of course, some delays are beyond our control but if this happens we will make every effort to keep you informed. If you experience any issues with delivery, please email us, contact us via Live Chat or call us for free on 0800 804 8879 for further assistance."
    },
    {
        id: "4",
        question: "What if my furniture does not fit?",
        answer: "Nobody wants the unfortunate situation where the furniture you’ve ordered does not fit, where it’s too big for the room or won’t fit through your home’s doorways or entrances. So, when you order your furniture, it’s important to check that it will fit into your house and your room. Please measure all doors, stairways and the chosen space as carefully as possible. Click here for our helpful online measuring guide. Furniture Village cannot accept responsibility for furniture not fitting, as ultimately it is up to you, the customer, to measure.If the worst happens and your delivered furniture won’t fit in, we can offer advice on what to do next.If this happens, or if you are concerned that furniture due to be delivered may not fit then please email us, contact us via Live Chat or call us for free on 0800 804 8879."
    },
]

const About_FAQ = () => {
    const [detail, setDetail] = useState(Question)

  return (
      <Fragment>

          <section className="accordion">

              <div className="accordion-row">

                  <div className="left">
                      <h3>Frequently Ask</h3>
                      {
                          detail.map((detail) => {
                              return (
                                  <div className="left-content">
                                      <Collapsible
                                          className='Collapsible'
                                          trigger={[<KeyboardArrowDown style={{ paddingRight: "10px", paddingTop:"5px"}}/>, detail.question]}
                                          triggerWhenOpen={[<KeyboardArrowUp style={{ paddingRight: "10px", paddingTop: "5px" }} />, detail.question]}
                                      >

                                          <p className="content-show">
                                              {detail.answer}
                                          </p>

                                      </Collapsible>
                                  </div>
                              )
                          })
                      }
                  </div>

              </div>

          </section>

      </Fragment>
  )
}

export default About_FAQ