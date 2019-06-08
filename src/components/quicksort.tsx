import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';


interface QuickSortState{
	list: number[]
}
interface QuickSortProps{
	list: number[]
}
interface Dataset{
	label: string,
	backgroundColor: string,
	borderColor: string,
	borderWidth: number,
	hoverBackgroundColor: string,
	hoverBorderColor: string,
	data: number[]
}
interface BarChartData{
	labels: string[],
	datasets: Dataset[]
}

class QuickSort extends React.Component<QuickSortProps, QuickSortState>{
    constructor(props: QuickSortProps){
		super(props);
		this.state = {
			list: this.props.list
		}
		this.quicksort = this.quicksort.bind(this);
		this.quicksort(props.list);
	}
	createData(list: number[]): any{
		return {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			datasets: [
				{
					label: 'My sort data',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: list
				}
			]
		}
	}
	quicksort(list: number[]): number[]{
		if(list.length < 2){
			return list;
		}
		let pivot = list[0];
		let left = list.slice(1).filter((v) => v < pivot);
		let right = list.slice(1).filter((v) => v >= pivot);
		left =  JSON.parse(JSON.stringify(left)) as number[];
		left.push(pivot);
		right = JSON.parse(JSON.stringify(right)) as number[];
		let result = this.quicksort(left).concat(this.quicksort(right));
		setTimeout(() => {
			this.setState({
				list: result
			});
		}, 2000);
		return result;
	}
	render(): JSX.Element {
		console.log(this.state.list);
		return (
				<div>
				<Bar
			data={this.createData(this.state.list)}
			width={100}
			height={50}
				/>
				</div>
		)
	}
}
export default QuickSort;
