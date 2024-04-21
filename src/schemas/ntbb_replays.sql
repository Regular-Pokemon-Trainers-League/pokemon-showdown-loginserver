CREATE TABLE ps.ntbb_replays (
	id VARCHAR(255) NOT NULL,
	format VARCHAR(45) NOT NULL,
	players VARCHAR(255) NOT NULL,
	log LONGTEXT NOT NULL ,
	inputlog LONGTEXT NULL,
	uploadtime INT8 NOT NULL,
	views INT8 NOT NULL DEFAULT 0,
	formatid VARCHAR(45) NOT NULL,
	rating INT8 NULL,
	private INT8 NOT NULL DEFAULT 0,
	password VARCHAR(31) NULL,
	CONSTRAINT replays_pkey PRIMARY KEY (id ASC),
	INDEX private_uploadtime (private ASC, uploadtime ASC),
	INDEX private_formatid_uploadtime (private ASC, formatid ASC, uploadtime ASC),
	INDEX private_formatid_rating (private ASC, formatid ASC, rating ASC)
);
