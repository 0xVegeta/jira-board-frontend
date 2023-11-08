// const initialData = {
// 	tasks: {
// 		"task-1": {
// 			id: "task-1",
// 			title: "Content Management",
// 			description:
// 				"Manage and update website content regularly to ensure it stays up to date and relevant.",
// 		},
// 		"task-2": {
// 			id: "task-2",
// 			title: "Market Research",
// 			description:
// 				"Conduct market research to identify customer needs and preferences in our target market.",
// 		},
// 		"task-3": {
// 			id: "task-3",
// 			title: "Product Development",
// 			description:
// 				"Work on developing new products that meet the demands of our customers and align with our business goals.",
// 		},
// 		"task-4": {
// 			id: "task-4",
// 			title: "Customer Support",
// 			description:
// 				"Provide timely and effective customer support to address inquiries, issues, and feedback from our clients.",
// 		},
// 		"task-5": {
// 			id: "task-5",
// 			title: "Social Media Management",
// 			description:
// 				"Create and manage social media campaigns to increase brand awareness and engage with our online community.",
// 		},
// 		"task-6": {
// 			id: "task-6",
// 			title: "Financial Analysis",
// 			description:
// 				"Analyze financial data and performance to make informed decisions and achieve our financial objectives.",
// 		},
// 		"task-7": {
// 			id: "task-7",
// 			title: "Content Creation",
// 			description:
// 				"Generate high-quality content, including articles, blog posts, and videos, to engage and inform our audience.",
// 		},
// 		"task-8": {
// 			id: "task-8",
// 			title: "Sales Strategy",
// 			description:
// 				"Develop and execute effective sales strategies to drive revenue and expand our customer base.",
// 		},
// 		"task-9": {
// 			id: "task-9",
// 			title: "Quality Assurance",
// 			description:
// 				"Ensure the quality and reliability of our products through rigorous testing and quality control processes.",
// 		},
// 		"task-10": {
// 			id: "task-10",
// 			title: "Project Management",
// 			description:
// 				"Oversee and manage projects from initiation to completion, meeting project goals and deadlines.",
// 		},
// 		"task-11": {
// 			id: "task-11",
// 			title: "Human Resources",
// 			description:
// 				"Manage HR functions, including recruitment, training, and employee relations, to support our workforce.",
// 		},
// 		"task-12": {
// 			id: "task-12",
// 			title: "Inventory Management",
// 			description:
// 				"Manage inventory levels and optimize supply chain processes to meet customer demand efficiently.",
// 		},
// 		"task-13": {
// 			id: "task-13",
// 			title: "Marketing Campaigns",
// 			description:
// 				"Plan and execute marketing campaigns to promote our products and services to our target audience.",
// 		},
// 		"task-14": {
// 			id: "task-14",
// 			title: "IT Support",
// 			description:
// 				"Provide technical support and maintain IT systems and infrastructure to ensure smooth operations.",
// 		},
// 		"task-15": {
// 			id: "task-15",
// 			title: "Legal Compliance",
// 			description:
// 				"Ensure the company complies with all relevant laws and regulations in its operations.",
// 		},
// 		"task-16": {
// 			id: "task-16",
// 			title: "Strategic Planning",
// 			description:
// 				"Engage in strategic planning to set long-term goals and direction for the company's growth and success.",
// 		},
// 	},
// 	columns: {
// 		"column-1": {
// 			id: "column-1",
// 			title: "To Do",
// 			taskIds: ["task-1", "task-2", "task-3", "task-4"],
// 		},
// 		"column-2": {
// 			id: "column-2",
// 			title: "In Progress",
// 			taskIds: ["task-5", "task-6", "task-7", "task-8"],
// 		},
// 		"column-3": {
// 			id: "column-3",
// 			title: "Review",
// 			taskIds: ["task-9", "task-10", "task-11", "task-12"],
// 		},
// 		"column-4": {
// 			id: "column-4",
// 			title: "Completed",
// 			taskIds: ["task-13", "task-14", "task-15", "task-16"],
// 		},
// 	},
// 	columnOrder: ["column-1", "column-2", "column-3", "column-4"],
// };
const initialData = [
	{
		id: "column-1",
		title: "To Do",
		tasks: [
			{
				id: "task-1",
				title: "Content Management",
				description:
					"Manage and update website content regularly to ensure it stays up to date and relevant.",
			},
			{
				id: "task-2",
				title: "Market Research",
				description:
					"Conduct market research to identify customer needs and preferences in our target market.",
			},
			{
				id: "task-3",
				title: "Product Development",
				description:
					"Work on developing new products that meet the demands of our customers and align with our business goals.",
			},
			{
				id: "task-4",
				title: "Customer Support",
				description:
					"Provide timely and effective customer support to address inquiries, issues, and feedback from our clients.",
			},
		],
		tint: 1,
	},
	{
		id: "column-2",
		title: "In Progress",
		tasks: [
			{
				id: "task-5",
				title: "Social Media Management",
				description:
					"Create and manage social media campaigns to increase brand awareness and engage with our online community.",
			},
			{
				id: "task-6",
				title: "Financial Analysis",
				description:
					"Analyze financial data and performance to make informed decisions and achieve our financial objectives.",
			},
			{
				id: "task-7",
				title: "Content Creation",
				description:
					"Generate high-quality content, including articles, blog posts, and videos, to engage and inform our audience.",
			},
			{
				id: "task-8",
				title: "Sales Strategy",
				description:
					"Develop and execute effective sales strategies to drive revenue and expand our customer base.",
			},
		],
		tint: 2,
	},
	{
		id: "column-3",
		title: "Review",
		tasks: [
			{
				id: "task-9",
				title: "Quality Assurance",
				description:
					"Ensure the quality and reliability of our products through rigorous testing and quality control processes.",
			},
			{
				id: "task-10",
				title: "Project Management",
				description:
					"Oversee and manage projects from initiation to completion, meeting project goals and deadlines.",
			},
			{
				id: "task-11",
				title: "Human Resources",
				description:
					"Manage HR functions, including recruitment, training, and employee relations, to support our workforce.",
			},
			{
				id: "task-12",
				title: "Inventory Management",
				description:
					"Manage inventory levels and optimize supply chain processes to meet customer demand efficiently.",
			},
		],
		tint: 3,
	},
	{
		id: "column-4",
		title: "Completed",
		tasks: [
			{
				id: "task-13",
				title: "Marketing Campaigns",
				description:
					"Plan and execute marketing campaigns to promote our products and services to our target audience.",
			},
			{
				id: "task-14",
				title: "IT Support",
				description:
					"Provide technical support and maintain IT systems and infrastructure to ensure smooth operations.",
			},
			{
				id: "task-15",
				title: "Legal Compliance",
				description:
					"Ensure the company complies with all relevant laws and regulations in its operations.",
			},
			{
				id: "task-16",
				title: "Strategic Planning",
				description:
					"Engage in strategic planning to set long-term goals and direction for the company's growth and success.",
			},
		],
		tint: 4,
	},
];

export default initialData;
