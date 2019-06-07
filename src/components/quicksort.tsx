import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface QuickSortState{
	list: number[]
}
interface QuickSortProps{
	list: number[]
}

class QuickSort extends React.Component<QuickSortProps, QuickSortState>{
    constructor(props: QuickSortProps){
		super(props);
		this.state = {
			list: this.quicksort(this.props.list)
		}
		this.quicksort = this.quicksort.bind(this);
	}
	quicksort(list: number[]): number[]{
		if(list.length < 2){
			return list;
		}
		let pivot = list[0];
		let left = list.slice(1).filter((v) => v < pivot);
		let right = list.slice(1).filter((v) => v >= pivot);
		let result = JSON.parse(JSON.stringify(left)) as number[];
		result.concat(JSON.parse(JSON.stringify(right)) as number[]);
		return result;
	}
	render(): JSX.Element {
		return (
				<div>
				{this.state.list.map((v) => (v + ","))}
				</div>
		)
	}
}
export default QuickSort;
