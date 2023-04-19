import { Gallery } from "../components/gallery";

export const IndexPage = () => {
	return (
		<div style={{ margin: 25 }}>
			<Gallery
				title="MEGA Hackathon 2023"
				image="https://media.discordapp.net/attachments/1026641752435724419/1096965073844572220/IMG_6333.jpg"
				description="MEGA Hackathon 2023 was hosted at Rutgers Preparatory School this year! We had a lot of fun and had great events such as workshops, karaoke, comedy, and other participant events!"
				gallery={[
					"https://media.discordapp.net/attachments/857650733233995776/1096967194107191466/20230415_133237.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1096967194417582100/20230415_132524.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1096965385867235338/IMG_6332.png?width=1200&height=675",
					"https://media.discordapp.net/attachments/1026641752435724419/1096965074712793231/IMG_6338.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/1026641752435724419/1096965124268503090/IMG_6357.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/1026641752435724419/1096965075618762872/IMG_6347.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/1026641752435724419/1096965076885450872/IMG_6352.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1096967193318674432/20230415_133639.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/1026641752435724419/1096965076046585906/IMG_6349.jpg?width=1200&height=675",
				]}
			/>
			<Gallery
				title="MEGA Hackathon 2022"
				image="https://media.discordapp.net/attachments/857650733233995776/1097007670474592356/IMG_7054.JPG"
				description="MEGA Hackathon 2022 was hosted at Hun School of Princeton! This year, people from six highschools congregated in Hun to participate in our first 24-hour hackathon! We did karaoke, workshops, and social lunch/dinners!"
				gallery={[
					"https://media.discordapp.net/attachments/857650733233995776/1097007067463680110/CCD10D53-BBFD-4DE4-8345-153FBAC4FA91.JPG?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007185113919658/CA78F457-66C3-41C5-BFCC-18FCC1F694EE.JPG?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007127068942446/529C94A3-D7B2-4895-8948-0A697403EACC.JPG?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007310280327188/IMG_2628.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007239908311120/IMG_1240.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007534793035846/IMG_1226.JPG?width=1200&height=675",
					"https://media.discordapp.net/attachments/959222968054087680/960125096956133426/IMG_2381.jpg?width=1200&height=675",
					"https://media.discordapp.net/attachments/857650733233995776/1097007346942742528/IMG_1207.JPG?width=1200&height=675",
					"https://media.discordapp.net/attachments/959222968054087680/960124929276248124/5FDA9FDD-EA53-4FBB-B902-C9ED183533C7.jpg?width=1200&height=675",
				]}
			/>
		</div>
	);
};
