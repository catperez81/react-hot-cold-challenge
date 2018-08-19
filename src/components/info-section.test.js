import React from 'react';
import {shallow, mount, render} from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', () => {

  it('Renders without crashing', () => {
      shallow(<InfoSection title = 'What do I do?'/>);
  });

  it('Renders the title', () => {
      const title = 'What do I do?';
      const wrapper = shallow(<InfoSection title={title} />);
      expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
  });

  it('Renders the paragraph', () => {
    const paragraph = 'This is a Hot or Cold Number Guessing Game. The game goes like this:';
    const wrapper = shallow(<InfoSection paragraph={paragraph} />);
    expect(wrapper.contains(<p>{paragraph}</p>)).toEqual(true);
	});

	it('Renders all list items', () => {
    const orderedList = `
	    	<li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
	      <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
	      <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>`;
    const wrapper = shallow(<InfoSection orderedList={orderedList} />);
    expect(wrapper.contains(<ol>{orderedList}</ol>)).toEqual(true);
	});

});
