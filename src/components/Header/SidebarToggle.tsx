/*
 * @Author: 紫荆
 * @Date: 2023-03-22 16:32:17
 * @LastEditors: 紫荆
 * @LastEditTime: 2023-06-15 17:29:58
 * @FilePath: \zijingWeb\src\components\Header\SidebarToggle.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const MenuToggle: FunctionalComponent = () => {
	const [sidebarShown, setSidebarShown] = useState(false);

	useEffect(() => {
		const body = document.querySelector('body')!;
		if (sidebarShown) {
			body.classList.add('mobile-sidebar-toggle');
		} else {
			body.classList.remove('mobile-sidebar-toggle');
		}
	}, [sidebarShown]);

	return (
		<button
			type="button"
			aria-pressed={sidebarShown ? 'true' : 'false'}
			id="menu-toggle"
			onClick={() => setSidebarShown(!sidebarShown)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<span className="sr-only">Toggle sidebar</span>
		</button>
	);
};

export default MenuToggle;
