//Importing Images
import one from "../images/Blog/1.jpg";
import two from "../images/Blog/2.jpg";
import three from "../images/Blog/3.jpg";

//Images that we use in blog
import woodenDesk from "../images/Blog/Articles/woodendesk.jpg";
import liveDesignProcess from "../images/Blog/Articles/livedesignprocess.jpg";
import whatNextOnAppStore from "../images/Blog/Articles/whatnextonappstore.jpg";

const blog = [
	{
		image: three,
		link: "/blog/the-humble-wooden-desk",
		title: "The Humble Wooden Desk",
		metaDescription: `What's to come next? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
		dateCreated: "1:31 PM - 28/11/2020",
		blog: (
			<>
				<h3>What’s to come next?</h3>
				<i>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</i>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est,
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
					velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem.
				</p>
				<h3>Should you adopt Sketch?</h3>
				<p>
					Neque porro quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur, adipisci velit, sed quia non numquam eius
					modi tempora incidunt ut labore et dolore magnam aliquam
					quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur? Quis autem vel eum iure
					reprehenderit qui in ea voluptate velit esse quam nihil
					molestiae consequatur, vel illum qui dolorem eum fugiat quo
					voluptas nulla pariatur?
				</p>
				<div className="blog-img">
					<img src={woodenDesk} alt="Wooden Desk" />
				</div>
				<p>
					Neque porro quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur, adipisci velit, sed quia non numquam eius
					modi tempora incidunt ut labore et dolore magnam aliquam
					quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur? Quis autem vel eum iure
					reprehenderit qui in ea voluptate velit esse quam nihil
					molestiae consequatur, vel illum qui dolorem eum fugiat quo
					voluptas nulla pariatur?
				</p>
				<span>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem. Perspiciatis unde omnis iste natus error sit
					voluptatem accusantium. Ut perspiciatis unde omnis iste
					natus error. Unde omnis iste natus error sit voluptatem.
					Somnis iste natus error sit voluptatem accusantium
					doloremque
				</span>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est,
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
					velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem. Ut enim
					ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur? Quis autem vel eum iure reprehenderit qui in ea
					voluptate velit esse quam nihil molestiae consequatur, vel
					illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
			</>
		),
	},
	{
		image: two,
		link: "/blog/what-next-of-the-app-store",
		title: "What’s Next of the App Store?",
		metaDescription: `What's to come next? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
		dateCreated: "1:28 PM - 28/11/2020",
	},
	{
		image: one,
		link: "/blog/live-the-design-process",
		title: "Live The Design Process",
		metaDescription: `What's to come next? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
		dateCreated: "1:22 PM - 28/11/2020",
	},
	{
		image: three,
		link: "/blog/the-humble-wooden-desk",
		title: "The Humble Wooden Desk",
		metaDescription: `What's to come next? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
		dateCreated: "1:31 PM - 28/11/2020",
	},
];

//Export
export default blog;
