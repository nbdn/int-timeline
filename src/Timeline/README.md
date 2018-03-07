# React Trials Timeline
*A responsive timeline with clinical trials.*


## Usage

| Property | Required | Default | Description 
| :------------- | :------------- | :------------- | :------------- |
| trials | true | *Array\<Trial>* none | Data set to render on the timeline.
| scrollConfig | false | *Object* {breakpoint: 50, unitWidth: 200} | Breakpoint defines the unit width value computed when the timeline must become scrollable. Unit width define the width of one unit when breakpoint is reached.
| startDate | false | *string* "2000-01-01" | The start date of the timeline
| refreshOnResize | false | *boolean* true | Must the timeline recompute data & dimensions when screen size change ?


**Notes :**
By default, the timeline component will take all the wrapper height / width as dimensions.

**Example :**

```js
const trials = [
  { start: 5, end: 50, title: 'Study of Bendamustine' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 70, end: 100, title: 'Study of Stockolm' },
  { start: 90, end: 115, title: 'Bortezomib' },
];

const scrollConfig = {
	breakpoint: 100,
	unitWidth: 100
};

<Timeline
	trials={trials}
	scrollConfig={scrollConfig}
	startDate={'2000-01-01'}
	refresOnResize
/>
```


 