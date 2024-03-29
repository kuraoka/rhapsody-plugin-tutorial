---
title: RhapsodyのPlug-inのJavaによるチュートリアル
---
IBM&reg; Engineering Systems Design Rhapsody&reg;(以下、Rhapsody)のPlug-in(マクロ)をJavaで作成するチュートリアルです。

## Javaの設定
このサンプルでは、次のバージョンを使用しています。

```
IBM Engineering Systems Design Rhapsody 9.0.1
  (どのEdtionでもPlug-inは動作します)
  インストールフォルダ: C:/Program Files/IBM/Rhapsody/9.0.1/

Apache Java 3.0.9

OS: Windows
```

Javaアプリケーションのコンパイル時に、下記を指定します。
- CLASSPATHに"(Rhapsodyのインストールフォルダ)/JavaAPI/rhapsody.jar"

Javaアプリケーションの実行時に、下記を指定します。
- CLASSPATHにて"(Rhapsodyのインストールフォルダ)/JavaAPI/rhapsody.jar"
- プロパティにてjava.library.path="(Rhapsodyのインストールフォルダ)/Share/JavaAPI"

コンパイルは次になります。
```
javac -cp "/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar" AppName.java
```

実行は次になります。
```
java -cp .:"/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar" -Djava.library.path="/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI" AppName
```

## サンプル

### ハイライトしているモデルの名前を表示
[ShowNameOfSelectedElement.java](ShowNameOfSelectedElement.java)
```
import com.telelogic.rhapsody.core.*;

public class ShowNameOfSelectedElement {
	public static void main(String[] args) {
		IRPApplication app = RhapsodyAppServer.getActiveRhapsodyApplication();
		IRPModelElement se = app.getSelectedElement();
		if (null != se) {
			System.out.println(se.getName());
		}
	}
}
```