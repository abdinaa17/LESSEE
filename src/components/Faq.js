import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Faq = () => {
    return (
        <div className="faq">
             <h1 className="page__h1">FAQ</h1>

             <Collapse >
          <Panel header="What does unlimited requests and revisions really mean?" key="1">
            <p>With all our plans, you can submit as many development requests as you would like and our developers will work on it every business day. Revisions are unlimited too!</p>
          </Panel>
          <Panel header="What is the turnaround time?" key="2">
            <p>Our developers will work on your requests every business day, all year long.

In 90% of the case, we deliver the first update the next day but for complex requests this can take 48h.</p>
          </Panel>
          <Panel header="Do I own the rights to the designs?" key="3">
            <p>Yes. All of our work is done for you and for you only. You have complete ownership of the files as soon as you received them and are free to use them as you please.</p>
          </Panel>
          <Panel header="What is your 14 days money back guarantee?" key="4">
            <p>All our plans come with a full 14 days money back guarantee.

If after several requests, you still don’t think LESSEE is the right fit for you, we will refund 100% of your initial membership fee.</p>
          </Panel>
          <Panel header="What more do I get with the Business plan?" key="5">
            <p>With our Business plan, you get 2 developers working on your account every day. Meaning that we will be able to get 2 times more done on a daily basis.</p>
          </Panel>
        </Collapse>
            
        </div>
    )
}

export default Faq
