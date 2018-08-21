import React from 'react';
import {shallow, mount, render} from 'enzyme';
import InfoSection from './info-section';


// getting Unterminated string constant on line 35 //

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
    const listItems = [
    "I pick a random secret number between 1 to 100 and keep it hidden.",
    "You need to guess until you can find the hidden secret number.",
    `You will get feedback on how close ("hot") or far ("cold") your guess is.`
    ];
    const wrapper = shallow(<InfoSection listItems={listItems} />);
    expect(wrapper.contains(listItems[0])).toEqual(true);
	});

});
