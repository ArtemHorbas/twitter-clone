import React, { useState } from 'react'
import cl from './Sign.module.scss'
import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormGroup,
	IconButton,
	TextField,
	Typography
} from '@mui/material'
import {
	Close,
	ModeCommentOutlined,
	PeopleAltOutlined,
	Search,
	Twitter
} from '@mui/icons-material'

const titles = [
	{
		title: 'Read what you really want',
		icon: <Search className={cl.infoIcons} />
	},
	{
		title: 'Learn new things',
		icon: <PeopleAltOutlined className={cl.infoIcons} />
	},
	{
		title: 'Enjoy your free time',
		icon: <ModeCommentOutlined className={cl.infoIcons} />
	}
]

const Sign: React.FC = () => {
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className={cl.wrapper}>
			<section className={cl.infoSide}>
				<Twitter color={'primary'} className={cl.infoTwitterLogo} />
				<ul>
					{titles.map(({ title, icon }) => (
						<li key={title}>
							<Typography variant={'h6'}>
								{icon} {title}
							</Typography>
						</li>
					))}
				</ul>
			</section>
			<section className={cl.signSide}>
				<div className={cl.signWrapper}>
					<Twitter color={'primary'} className={cl.twitterLogo} />
					<Typography className={cl.signSideTitle} variant={'h4'}>
						Jump to incredable environment of amazing people
					</Typography>
					<Typography>
						<b>Join Twitter now!</b>
					</Typography>
					<br />
					<Button
						style={{ marginBottom: 15 }}
						color="primary"
						variant="contained"
						fullWidth
					>
						Sign Up
					</Button>
					<Button color="primary" variant="outlined" fullWidth>
						Sign In
					</Button>

					<Dialog open={open} onClose={handleClose}>
						<DialogTitle>
							<IconButton
								onClick={handleClose}
								color={'secondary'}
								aria-label={'close'}
							>
								<Close style={{ fontSize: 26 }} />
							</IconButton>
							ЗАБЕРУ ТЕБЯ В МОСКВУ
						</DialogTitle>
						<DialogContent>
							<DialogContentText>Lorem ipsum huipsum xanny</DialogContentText>
						</DialogContent>
						<FormControl component={'fieldset'} fullWidth>
							<FormGroup aria-label={'position'} row>
								<TextField
									autoFocus
									margin={'dense'}
									id={'name'}
									label={'Email Address'}
									type={'email'}
									fullWidth
								/>
								<div>
									<div></div>
								</div>
							</FormGroup>
						</FormControl>
					</Dialog>
				</div>
			</section>
		</div>
	)
}

export default Sign
