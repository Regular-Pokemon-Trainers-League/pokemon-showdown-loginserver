CREATE TABLE ps.ntbb_replayplayers (
	playerid VARCHAR(255) NOT NULL,
	formatid VARCHAR(45) NOT NULL,
	id VARCHAR(255) NOT NULL,
	rating INT8 NULL,
	uploadtime INT8 NOT NULL,
	private INT8 NOT NULL DEFAULT 0,
	password VARCHAR(31) NULL,
	format VARCHAR(45) NOT NULL,
	players VARCHAR(255) NOT NULL,
	INDEX private_uploadtime (private ASC, uploadtime ASC),
	INDEX private_formatid_uploadtime (private ASC, formatid ASC, uploadtime ASC),
	INDEX private_formatid_rating (private ASC, formatid ASC, rating ASC)
);
