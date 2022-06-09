[Versão online](link)

Problemas que tive fazendo esse mini-app:
	- O update input tava bugado, mas basicamente era um problema de lógica besta que eu não consegui resolver no 1 dia que tentei, só depois de uma noite de descanso, risos, descansem, faz bem pra cabeça.
	- Os valores atualizados vez ou outra vinham com muito mais casas depois da virgula do que deveria, então tive que descobrir alguma forma de arredondar, e quais seriam os problemas que isso podia trazer.

Para resolver o problema no updateInput:
	- Antes eu estava tentando fazer com uma forma de ifs sem sentido algum, hoje me lembrei que talvez eu conseguisse visualizar qual campo de input chamou a função, então:
		- Eu guardei o elemento que chamou a função em uma constante, usando o getAttribute e passando o data-js que eu tinha definido antes.
		- Com isso eu usei um switch básico pra poder limitar as atualizações, assim foi resolvido o bug que eu mesmo tinha causado, risos.

Para resolver o problema das casas decimais:
	- Inicialmente eu pensei em pegar como string e formatar com o slice, mas isso não parecia querer resolver, então depois de algumas pesquisas:
		- Eu optei usar o Number.parseFloat(variable).toFixed(2) para limitar em 2 casas após a virgula.
		- Esse metódo pórem parece não ser 100% preciso, mas pra algo básico que serve como uma estimativa do valor de conversão cru, parece ser o suficiente.
	
Bom é isso, vivendo, aprendendo e esquecendo javascript básico, vida que segue e vamo lá.
