在production阶段，需要将他们整合到一起部署：
	1）网上提到了四种方式（Springboot+angular deployment）： 
		Refernece:
		https://www.javacodegeeks.com/2018/03/4-ways-to-deploy-spring-boot-angular-app-maven-tomcat.html
		https://medium.com/bb-tutorials-and-thoughts/how-to-build-angular-with-java-backend-for-production-9cc04f97e3c
		https://github.com/only2dhir/spring-boot-angular-deployment
	2）如何避免spring boot接管angular 的路由： 在angular路由中启用hash路由
  https://blog.csdn.net/du1996/article/details/102895056?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf
	3）angular的构建，对production可以
	"build-prod": "ng build --prod --deploy-url /ui/",
	这样的话在形成的index.html中，
	<script src="/ui/runtime.f6a8ad9694572c05fba5.js" defer></script><script src="/ui/polyfills.a4021de53358bb0fec14.js" defer></script><script src="/ui/scripts.a73844de5f291be94c3b.js" defer></script><script src="/ui/main.e8cee1fcbd40f94a7d60.js" defer></script>
	然后就可以将ja/user-ui/dist/ui 考到java web那边， 对spring boot可以直接放到ja/user-portal/src/main/resources/static/ui
