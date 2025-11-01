const items: string[] = [
	"問題",
	"出力",
	"デバッグコンソール",
	"ターミナル",
	"ポート",
	"SPELL CHECKER",
	"GITLENS",
	"コメント",
];

export function TerminalHeader() {
	return (
		<div>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}
