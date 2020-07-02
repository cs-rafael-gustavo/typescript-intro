// accountInfo
// charInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Rafael",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "rafamat",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Rafael",
  nickname: "rafamat",
  level: 100,
};
